import { useEffect, useMemo, useState } from "react";

function App() {

    const genders = [
        { key: "1", value: "Erkek" },
        { key: "2", value: "Kadın" }
    ];

    const categoryList = [
        { key: 1, value: "PHP" },
        { key: 2, value: "JavaScript" },
        { key: 3, value: "CSS" },
        { key: 4, value: "HTML" }
    ];

    const levels = [
        { key: 'beginner', value: 'Başlangıç' },
        { key: 'jr_developer', value: 'Jr. Developer' },
        { key: 'sr_developer', value: 'Sr. Developer' }
    ]

    const [name, setName] = useState('');
    const [description, setDescription] = useState('aaa');
    const [gender, setGender] = useState('');
    const [categories, setCategories] = useState([2, 4]);
    const [level, setLevel] = useState('jr_developer');
    const [avatar, setAvatar] = useState(false);
    const [image, setImage] = useState('');

    useEffect(() => {
        if (avatar) {
            const fileReader = new FileReader();
            fileReader.addEventListener('load', function () {
                setImage(this.result);
            })
            fileReader.readAsDataURL(avatar);
        }
    }, [avatar])

    const [rule, setRule] = useState(true);
    const [rules, setRules] = useState([
        { key: 1, value: '1. Kuralı kabul ediyorum', checked: false },
        { key: 2, value: '2. Kuralı kabul ediyorum', checked: false },
        { key: 3, value: '3. Kuralı kabul ediyorum', checked: true }
    ]);

    const checkRule = (key, checked) => {
        setRules(rules => rules.map(rule => {
            if (key == rule.key) {
                rule.checked = checked
            }
            return rule;
        }))
    }

    const submitHandle = () => {
        const formData = new FormData();
        formData.append('avatar', avatar);
        formData.append('name', name);
        fetch('https://xxx', {
            method: 'POST',
            body: formData
        });
    }

    const selectedGender = genders.find(g => g.key == gender);
    const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key));
    const disabled = rules.every(rule => rule.checked) || !avatar;
    const selectedLevel = levels.find(l => l.key == level);

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <br />
            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option value="">Seçiniz</option>
                {genders.map(gender => (
                    <option value={gender.key} key={gender.key}>{gender.value}</option>
                ))}
            </select>
            <br />
            <button onClick={() => setCategories([1, 2, 3])}>Set Categories</button><br />
            <select size="10" value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
                <option value="">Seçiniz</option>
                {categoryList.map(category => (
                    <option value={category.key} key={category.key}>{category.value}</option>
                ))}
            </select>
            <br />
            <label>
                <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)} /> Kuralları kabul ediyorum.
            </label>
            <br />
            <button onClick={submitHandle} disabled={!disabled}>Devam Et</button>
            <br />
            {rules.map(rule => (
                <label key={rule.key}>
                    <input type="checkbox" checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)} /> {rule.value}
                </label>
            ))}
            <br />
            {levels.map((l, index) => (
                <label key={index}>
                    <input type="radio" checked={l.key == level} value={l.key} onChange={e => setLevel(e.target.value)} /> {l.value}
                </label>
            ))}
            <br />
            {avatar && (
                <>
                    <h3>{avatar.name}</h3>
                    {image && <img src={image} alt="" />}
                </>
            )}
            <br />
            <label>
                <input type="file" onChange={e => setAvatar(e.target.files[0])} />
            </label>
            <br />
            <pre>
                {JSON.stringify(selectedLevel, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(rules, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(selectedGender, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(selectedCategories, null, 2)}
            </pre>
        </>
    )
}

export default App;
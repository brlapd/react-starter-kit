import { useAuth } from "../context";
import ContextFooter from "./ContextFooter";
import ContextHeader from "./ContextHeader";

function Home() {

    const { user } = useAuth();

    return (
        <>
            <ContextHeader />
            App
            {user && (
                <div style={{ padding: 10, border: '1px solid red' }}>
                    Bu alan sadece kullanıcı oturumu açık olduğunda görünür
                </div>
            )}
            <ContextFooter />
        </>
    )
}

export default Home
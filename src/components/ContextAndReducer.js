
import { SiteProvider, AuthProvider } from "../context";

import Home from "./Home";

function ContextAndReducer() {


    return (
        <SiteProvider>
            <AuthProvider>
                <Home />
            </AuthProvider>
        </SiteProvider>
    )
}

export default ContextAndReducer;
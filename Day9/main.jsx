import{StrictMode} from "react"; 4.2k (gzipped: 1.9k)
import {createRoot} from "react-dom/client"; 505(gzipped: 324)
import App from "./app.jsx";
import marks from "./marks.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
        <marks m1={56} m2={60} m3={70} m4={89} m5={92} m6={97}/>
        <marks m1={23} m2={32} m3={34} m4={56} m5={76} m6={78}/>
    </StrictMode>
);
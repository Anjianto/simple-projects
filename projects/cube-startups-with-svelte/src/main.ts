import App from "./App.svelte";
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

const app = new App({
  target: document.body,
});

export default app;

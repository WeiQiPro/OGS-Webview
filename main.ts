import { Webview } from "https://deno.land/x/webview/mod.ts";

const webview = new Webview();
webview.navigate("https://online-go.com");
webview.run();
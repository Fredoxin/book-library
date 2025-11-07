export function insertTemplateToDOM (html) {
    if (!html) {
        throw new Error("No template found");
    }

    const app = document.querySelector(".app");
    if (!app) {
        throw new Error("Target container not found");
    }

    // Neues Template-Tag erstellen
    const templateTag = document.createElement("template");
    templateTag.innerHTML = html;

    // Zielcontainer bereinigen und Template-Inhalt einfügen
    app.innerHTML = ""; 
    app.append(templateTag.content.cloneNode(true));
    }

   
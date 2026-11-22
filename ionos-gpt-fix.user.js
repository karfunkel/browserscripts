// ==UserScript==
// @name         IONOS AI Chat Fix: Zeilenumbruch Korrektur
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Korrigiert den fehlerhaften Cursor-Sprung und die Leerzeile bei Strg+Enter auf ai.ionos.de
// @author       IONOS Assistant
// @match        https://ai.ionos.de/*
// @grant        none
// @run-at       document-end
// @icon         data:image/x-icon;base64,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
// @updateURL    https://raw.githubusercontent.com/karfunkel/browserscripts/main/ionos-gpt-fix.user.js
// @downloadURL  https://raw.githubusercontent.com/karfunkel/browserscripts/main/ionos-gpt-fix.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Funktion, um den Zeilenumbruch korrekt einzufügen
    function insertLineBreakAtCursor(inputElement) {
        const startPos = inputElement.selectionStart;
        const endPos = inputElement.selectionEnd;
        const text = inputElement.value;
        const lineBreak = '\n';

        // Text neu zusammensetzen: Teil vor Cursor + Zeilenumbruch + Teil nach Cursor
        inputElement.value = text.substring(0, startPos) + lineBreak + text.substring(endPos);

        // Cursor direkt hinter den eingefügten Zeilenumbruch setzen
        const newCursorPos = startPos + 1;
        inputElement.selectionStart = newCursorPos;
        inputElement.selectionEnd = newCursorPos;

        // Wichtig: Ein 'input' Event feuern, damit die Webseite (React/Vue/etc.) den neuen Text erkennt
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Event Listener für Tastatureingaben
    document.addEventListener('keydown', function(e) {
        // Prüfen auf Strg+Enter (Windows/Linux) oder Cmd+Enter (Mac)
        if ((e.ctrlKey || e.metaKey || e.shiftKey) && e.key === 'Enter') {

            // Ziel finden: Wir suchen das aktive Eingabefeld im Chat-Bereich
            // Da die Seite dynamisch ist, prüfen wir das aktuell fokussierte Element
            const activeElement = document.activeElement;

            // Prüfen, ob es sich um ein Textarea oder ein div mit contenteditable handelt
            const isTextArea = activeElement && activeElement.tagName === 'TEXTAREA';
            const isContentEditable = activeElement && activeElement.isContentEditable;

            if (isTextArea || isContentEditable) {
                // Standardverhalten verhindern (das den Bug verursacht)
                e.preventDefault();
                e.stopPropagation();

                if (isTextArea) {
                    insertLineBreakAtCursor(activeElement);
                } else if (isContentEditable) {
                    // Für contenteditable Divs ist die Handhabung etwas komplexer
                    // Wir nutzen execCommand für maximale Kompatibilität bei editierbaren Divs
                    document.execCommand('insertLineBreak');
                    // Falls execCommand den Cursor trotzdem falsch setzt, hier manuelle Korrektur versuchen:
                    // (In den meisten modernen Browsern korrigiert insertLineBreak den Cursor korrekt)
                }
                return false;
            }
        }
    }, true); // true für 'capture' Phase, um sicherzugehen, dass wir es vor der Seite abfangen

})();

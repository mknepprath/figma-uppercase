var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This plugin creates 5 rectangles on the screen.
const numberOfRectangles = 5;
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
// const nodes: SceneNode[] = [];
// for (let i = 0; i < numberOfRectangles; i++) {
//   const rect = figma.createRectangle();
//   rect.x = i * 150;
//   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
//   figma.currentPage.appendChild(rect);
//   nodes.push(rect);
// }
// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);
function changeText() {
    return __awaiter(this, void 0, void 0, function* () {
        for (const node of figma.currentPage.selection) {
            if (node.type !== "TEXT")
                return;
            yield figma.loadFontAsync(node.fontName);
            node.characters = node.characters.toUpperCase();
        }
        figma.closePlugin();
    });
}
changeText();
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.closePlugin();

import { DryFyConnectCard } from "./DryFyConnectCard";
import { DryFyConnectEditor } from "./DryFyConnectEditor";

customElements.define(
    "dryfy-connect-card",
    DryFyConnectCard
);
customElements.define(
    "dryfy-connect-editor",
    DryFyConnectEditor
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "dryfy-connect-card",
    name: "Card for a DryFy Connect",
    description: "Control and monitor a DryFy Connect",
});
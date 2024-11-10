
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $9331d5258daf1b49$exports = {};
$9331d5258daf1b49$exports = "<ha-card>\n    <div class=\"card-content\">\n        <p class=\"error error hidden\">\n        </p><dl class=\"dl\">\n            <dt class=\"dt\"></dt>\n            <dd class=\"dd\">\n                <span class=\"toggle\">\n                    <span class=\"button\"></span>\n                </span>\n                <span class=\"value\">\n                </span>\n            </dd>\n        </dl>\n    </div>\n</ha-card>";


var $eba68c2920062618$exports = {};
$eba68c2920062618$exports = ".error {\n  color: red;\n}\n\n.error.hidden {\n  display: none;\n}\n\n.dl {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  display: grid;\n}\n\n.dl.hidden {\n  display: none;\n}\n\n.dt {\n  flex-wrap: wrap;\n  align-content: center;\n  display: flex;\n}\n\n.dd {\n  grid-template-columns: repeat(2, minmax(0, auto) minmax(0, 2fr));\n  margin: 0;\n  display: grid;\n}\n\n.toggle {\n  border: gray;\n  border-radius: 50%;\n  padding: .6em;\n}\n\n.toggle.on {\n  background-color: green;\n}\n\n.toggle.off {\n  background-color: red;\n}\n\n.button {\n  background-color: silver;\n  border: .2em outset silver;\n  border-radius: 50%;\n  width: 1.4em;\n  height: 1.4em;\n  display: block;\n}\n\n.value {\n  flex-wrap: wrap;\n  align-content: center;\n  padding-left: .5em;\n  display: flex;\n}\n";


class $c005517c2d1cded1$export$631f4954d1ac45eb extends HTMLElement {
    // private properties
    _config;
    _hass;
    _elements = {};
    // lifecycle
    constructor(){
        super();
        this.doHtml();
        this.doStyle();
        this.doAttach();
        this.doQueryElements();
        this.doListen();
    }
    setConfig(config) {
        this._config = config;
        this.doCheckConfig();
        this.doUpdateConfig();
    }
    set hass(hass) {
        this._hass = hass;
        this.doUpdateHass();
    }
    onClicked() {
        this.doToggle();
    }
    // accessors
    isOff() {
        return this.getState().state === "off";
    }
    isOn() {
        return this.getState().state === "on";
    }
    getHeader() {
        return this._config.header;
    }
    getEntityID() {
        return this._config.entity;
    }
    getState() {
        return this._hass.states[this.getEntityID()];
    }
    getAttributes() {
        return this.getState().attributes;
    }
    getName() {
        const friendlyName = this.getAttributes().friendly_name;
        return friendlyName ? friendlyName : this.getEntityID();
    }
    // jobs
    doCheckConfig() {
        if (!this._config.entity) throw new Error("Please define an entity!");
    }
    doHtml() {
        const importBox = document.createElement("div");
        importBox.innerHTML = (0, (/*@__PURE__*/$parcel$interopDefault($9331d5258daf1b49$exports)));
        this._elements.card = importBox.firstElementChild;
    }
    doStyle() {
        this._elements.style = document.createElement("style");
        this._elements.style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($eba68c2920062618$exports)));
    }
    doAttach() {
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.append(this._elements.style, this._elements.card);
    }
    doQueryElements() {
        const card = this._elements.card;
        this._elements.error = card.querySelector(".error");
        this._elements.dl = card.querySelector(".dl");
        this._elements.topic = card.querySelector(".dt");
        this._elements.toggle = card.querySelector(".toggle");
        this._elements.value = card.querySelector(".value");
    }
    doListen() {
        this._elements.dl.addEventListener("click", this.onClicked.bind(this), false);
    }
    doUpdateConfig() {
        if (this.getHeader()) this._elements.card.setAttribute("header", this.getHeader());
        else this._elements.card.removeAttribute("header");
    }
    doUpdateHass() {
        if (!this.getState()) {
            this._elements.error.textContent = `${this.getEntityID()} is unavailable.`;
            this._elements.error.classList.remove("hidden");
            this._elements.dl.classList.add("hidden");
        } else {
            this._elements.error.textContent = "";
            this._elements.topic.textContent = this.getName();
            if (this.isOff()) {
                this._elements.toggle.classList.remove("on");
                this._elements.toggle.classList.add("off");
            } else if (this.isOn()) {
                this._elements.toggle.classList.remove("off");
                this._elements.toggle.classList.add("on");
            }
            this._elements.value.textContent = this.getState().state;
            this._elements.error.classList.add("hidden");
            this._elements.dl.classList.remove("hidden");
        }
    }
    doToggle() {
        this._hass.callService("input_boolean", "toggle", {
            entity_id: this.getEntityID()
        });
    }
    // card configuration
    static getConfigElement() {
        return document.createElement("dryfy-humidifier-with-graphical-configuration");
    }
    static getStubConfig() {
        return {
            entity: "input_boolean.tcwt",
            header: ""
        };
    }
}


var $43309a326bc2e94a$exports = {};
$43309a326bc2e94a$exports = "<form class=\"table\">\n    <div class=\"row\"><label class=\"label cell\" for=\"header\">Header:</label><input class=\"value cell\" id=\"header\"></div>\n    <div class=\"row\"><label class=\"label cell\" for=\"entity\">Entity:</label><input class=\"value cell\" id=\"entity\"></div>\n</form>";


var $bfc20d3a780c3835$exports = {};
$bfc20d3a780c3835$exports = ".table {\n  display: table;\n}\n\n.row {\n  display: table-row;\n}\n\n.cell {\n  padding: .5em;\n  display: table-cell;\n}\n";


class $c7f0d99ce36cc1b8$export$fb35a89a86b33bef extends HTMLElement {
    // private properties
    _config;
    _hass;
    _elements = {};
    // lifecycle
    constructor(){
        super();
        this.doHtml();
        this.doStyle();
        this.doAttach();
        this.doQueryElements();
        this.doListen();
    }
    setConfig(config) {
        this._config = config;
        this.doUpdateConfig();
    }
    set hass(hass) {
        this._hass = hass;
        this.doUpdateHass();
    }
    onChanged(event) {
        this.doMessageForUpdate(event);
    }
    // jobs
    doHtml() {
        const importBox = document.createElement("div");
        importBox.innerHTML = (0, (/*@__PURE__*/$parcel$interopDefault($43309a326bc2e94a$exports)));
        this._elements.editor = importBox.firstElementChild;
    }
    doStyle() {
        this._elements.style = document.createElement("style");
        this._elements.style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($bfc20d3a780c3835$exports)));
    }
    doAttach() {
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.append(this._elements.style, this._elements.editor);
    }
    doQueryElements() {
        this._elements.header = this._elements.editor.querySelector("#header");
        this._elements.entity = this._elements.editor.querySelector("#entity");
    }
    doListen() {
        this._elements.header.addEventListener("focusout", this.onChanged.bind(this));
        this._elements.entity.addEventListener("focusout", this.onChanged.bind(this));
    }
    doUpdateConfig() {
        this._elements.header.value = this._config.header;
        this._elements.entity.value = this._config.entity;
    }
    doUpdateHass() {}
    doMessageForUpdate(changedEvent) {
        // this._config is readonly, copy needed
        const newConfig = Object.assign({}, this._config);
        if (changedEvent.target.id == "header") newConfig.header = changedEvent.target.value;
        else if (changedEvent.target.id == "entity") newConfig.entity = changedEvent.target.value;
        const messageEvent = new CustomEvent("config-changed", {
            detail: {
                config: newConfig
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(messageEvent);
    }
}


customElements.define("dryfy-connect-card", (0, $c005517c2d1cded1$export$631f4954d1ac45eb));
customElements.define("dryfy-connect-editor", (0, $c7f0d99ce36cc1b8$export$fb35a89a86b33bef));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "dryfy-connect-card",
    name: "Card for a DryFy Connect",
    description: "Control and monitor a DryFy Connect"
});


//# sourceMappingURL=card.js.map

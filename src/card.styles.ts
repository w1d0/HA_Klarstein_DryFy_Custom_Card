import { css } from 'lit';

export default css`
    .error {
        color: red;
    }

    .dl {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .dt {
        display: flex;
        align-content: center;
        flex-wrap: wrap;
    }

    .dd {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, auto) minmax(0, 2fr));
        margin: 0;
    }

    .toggle {
        padding: 0.6em;
        border: grey;
        border-radius: 50%;
    }

    .toggle.on {
        background-color: green;
    }

    .toggle.off {
        background-color: red;
    }

    .button {
        display: block;
        border-radius: 50%;
        border: 0.2em outset silver;
        background-color: silver;
        width: 1.4em;
        height: 1.4em;
    }

    .value {
        padding-left: 0.5em;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
    }
`;
class FormatCurrency extends Number {
    value: number;
    n: number;
    x: number;
    s: string;
    c: string;
    constructor(value: number, n: number, x: number, s: string, c: string) {
        super();

        this.n = n;
        this.x = x;
        this.s = s;
        this.c = c;
        this.value = value;
        this.format = this.format.bind(this);
    }

    format = () => {
        const re = "\\d(?=(\\d{" + (this.x || 3) + "})+" + (this.n > 0 ? "\\D" : "$") + ")";
        const num = this.value.toFixed(Math.max(0, ~~this.n));
        return (this.c ? num.replace(".", this.c) : num).replace(
            new RegExp(re, "g"),
            "$&" + (this.s || ",")
        );
    };
}

export { FormatCurrency };

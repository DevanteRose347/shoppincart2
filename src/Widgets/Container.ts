export default class Container {
    constructor(
        private _backgroundColor: string = 'black',
        private _color: string = "white",
        private _borderColor: string = "white",
        private _borderRadius: string = "0px",
        private _borderStyle: string = "solid",
        private _borderWidth: string = "1px",
        private _zIndex: string = '0'
    ) { }

    public get zIndex(): string {
        return this._zIndex;
    }
    public set zIndex(value: string) {
        this._zIndex = value;
    }
    public get borderWidth(): string {
        return this._borderWidth;
    }
    public set borderWidth(value: string) {
        this._borderWidth = value;
    }
    public get borderStyle(): string {
        return this._borderStyle;
    }
    public set borderStyle(value: string) {
        this._borderStyle = value;
    }
    public get borderRadius(): string {
        return this._borderRadius;
    }
    public set borderRadius(value: string) {
        this._borderRadius = value;
    }
    public get borderColor(): string {
        return this._borderColor;
    }
    public set borderColor(value: string) {
        this._borderColor = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get backgroundColor(): string {
        return this._backgroundColor;
    }
    public set backgroundColor(value: string) {
        this._backgroundColor = value;
    }

    public get attributes(): Partial<CSSStyleDeclaration> {
        return {
            backgroundColor: this.backgroundColor,
            color: this.color,
            borderColor: this.borderColor,
            borderRadius: this.borderRadius,
            borderStyle: this.borderStyle,
            borderWidth: this.borderWidth,
            zIndex: this.zIndex
        }
    }

}

import Component from "./Component";


export default class Canvas{
    private _widgets: Component[] = []

    constructor(private parent: HTMLElement){
        this.parent.innerHTML = ''
        this.parent.id = 'canvas'

        const newStyle: Partial<CSSStyleDeclaration> = {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows : 'repeat(12, 1fr)',
            gridGap: '5px',
            height: '100vh',
            aspectRatio: '1/1',
            margin: '5px auto',
            border: '2px solid orange'
        };
        Object.assign(this.parent.style, newStyle)
    }

    public get widgets(): Component[]{
        return this._widgets
    }

    public set widgets(value: Component[]){
         this._widgets = value;
    }

    public addwidget(widget:Component):void{
        this._widgets.push(widget) 
        widget.canvas = this
        this.render()
    }

    public render():void {
        this.parent.innerHTML = ""
        for (const widget of this.widgets){
            this.buildWidget(widget)
        }
    }

    private buildWidget(widget: Component): void{
        const div = this.intializeDiv(widget)
        this.buildShape(widget, div)
        this.placeShape(widget, div)
        div.appendChild(widget.content)
        this.parent.append(div)
    }

    private intializeDiv(widget: Component):HTMLDivElement{
        const div = document.createElement('div')
        div.id = widget.id
        const newStyle: Partial<CSSStyleDeclaration> = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            margin: 'auto',
            width: '100%',
            height: '100%',
            padding: '3%',
            aspectRatio: '1/1'
        };

       Object.assign(div.style, newStyle)
       return div
    }
    private buildShape(widget:Component, div:HTMLDivElement):void{
        Object.assign(div.style, widget.shape.attributes)
    }

    private placeShape(widget: Component, div: HTMLDivElement):void{
        const newStyle: Partial<CSSStyleDeclaration> = {
            gridArea: widget.locationTop.toString(),
            gridColumnStart: widget.locationLeft.toString(),
            gridColumnEnd: "span " + widget.width,
            gridRowStart: widget.locationTop.toString(),
            gridRowEnd: "span " + widget.height          

        }

        Object.assign(div.style, newStyle)
    

    }

}
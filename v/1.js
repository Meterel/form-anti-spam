// Made by Meterel
// https://github.com/Meterel/form-anti-spam


export function formAntiSpam({elem,exclude,form}){
    for(const x of document.querySelectorAll("script")) if(x.innerHTML.includes("formAntiSpam")) x.remove();

    if(!exclude){
        elem=elem.attachShadow({mode:"closed"});

        const style=new CSSStyleSheet();
        elem.adoptedStyleSheets=[style];

        function applyStyles(){
            let styleText="";
            for(const s of document.styleSheets){
                try{
                    for(const r of s.cssRules) styleText+=r.cssText;
                }catch{}
            }
            style.replace(styleText);
        }
        if(document.readyState==="complete") applyStyles();
        else addEventListener("load",applyStyles);
    }

    elem.innerHTML=`
        <form method="post" action="/watch?v=dQw4w9WgXcQ" style="scale: 0.0001 !important; position: fixed !important;">
            <label>email</label>
            <input name="email" type="email" required>
            <label>message</label>
            <textarea name="message" required></textarea>
            <button type="submit">submit</button>
        </form>
    `+form;

    for(const x of elem.children) x.children[Math.floor(Math.random()*x.childElementCount)].insertAdjacentHTML("beforebegin",`
        <input name="dQw4w9WgXcQ" style="scale: 0.0001 !important; position: fixed !important;" oninput='
            document.open();
            document.close();

            location.replace("/watch?v=dQw4w9WgXcQ");
        '>
    `);

    for(const e of [...elem.querySelectorAll(exclude ? "*:not("+exclude+")" : "*"),elem]){
        for(const i in e){
            try{
                Object.defineProperty(e,i,{configurable:false,writable:false,enumerable:false,value:undefined});
            }catch{}
        }
    }
}
// Made by Meterel
// https://github.com/Meterel/form-anti-spam


export function formAntiSpam({elem,exclude,form}){
    for(const x of document.querySelectorAll("script")) if(x.innerHTML.includes("formAntiSpam")) x.remove();

    let root;
    let selector="*";
    if(exclude){
        elem.insertAdjacentHTML("beforeend",form);
        root=elem.lastElementChild;
        selector+=":not("+exclude+")";
    }else{
        root=elem.attachShadow({mode:"closed"});
        root.innerHTML=form;

        const style=new CSSStyleSheet();
        root.adoptedStyleSheets=[style];

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

    for(const e of [...root.querySelectorAll(selector),root]){
        for(const i in e){
            try{
                Object.defineProperty(e,i,{configurable:false,writable:false,enumerable:false,value:undefined});
            }catch{}
        }
    }
}
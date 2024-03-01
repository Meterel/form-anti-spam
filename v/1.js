// Made by Meterel
// https://github.com/Meterel/form-anti-spam


export async function formAntiSpam({elem,exclude,form}){
    for(const x of document.querySelectorAll("script")) if(x.innerHTML.includes("formAntiSpam")) x.remove();

    let root;
    let selector="*";
    if(exclude){
        elem.insertAdjacentHTML("beforeend",form);
        root=elem.lastElementChild;
        selector+=":not("+exclude+")";
    }else{
        if(document.readyState!=="complete") await new Promise(r=>addEventListener("load",r));

        root=elem.attachShadow({mode:"closed"});
        root.innerHTML=form;

        const style=new CSSStyleSheet();
        for(const s of document.styleSheets){
            try{
                for(const r of s.cssRules){
                    try{
                        style.insertRule(r.cssText);
                    }catch{}
                }
            }catch{}
        }
        root.adoptedStyleSheets=[style];
    }

    for(const e of [...root.querySelectorAll(selector),root]){
        for(const i in e){
            try{
                Object.defineProperty(e,i,{configurable:false,writable:false,enumerable:false,value:undefined});
            }catch{}
        }
    }
}
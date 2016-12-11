// noprotect
function getCssRulesOf(w){
 const $=w, $d=$.document, sheets=$d.styleSheets, sl=sheets.length, s1=sheets[0];
 if(sl!==0 && (sl!==1||(s1.disabled===false && s1.cssRules.length!==0))){//almeno un primo foglio abilitato con almeno una regola...
  const data=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  regex={
   pseudo:{
    all:/::?[^:,.\s]+/gi,
    classes:/:(?::?(?:after|b(?:efore|ackdrop)|first-l(?:ine|etter)|placeholder|marker|(?:spelling|grammar)-error)|:selection)/gi,
    elements:/:(?:hover|checked|n(?:ot\(.*\)|th-(?:child\(.*\)|last-(?:child\(.*\)|of-type\(.*\))|of-type\(.*\)))|f(?:irst(?:-(?:child|of-type))?|ullscreen|ocus)|v(?:alid|isited)|l(?:a(?:ng\(.*\)|st-(?:child|of-type))|eft|ink)|a(?:ctive|ny)|only-(?:child|of-type)|d(?:efault|(?:i(?:r\(.*\)|sabled)))|e(?:mpty|nabled)|r(?:e(?:quired|ad-(?:only|write))|ight|oot)|in(?:determinate|valid|-range)|o(?:ptional|ut-of-range)|target|scope)/gi
   }
  },
  trace=console;
  trace.clear();
  trace.groupCollapsed('styleSheets');
  for(let i=0,m=sheets,l=sl,sheet;i<l;){
   const rules=(sheet=m[i]).cssRules,rl=rules.length;
   trace.groupCollapsed(i+'\u2002%O',sheet,rl);
   if(rl!==0 && sheet.disabled===false){
    const pseudo=regex.pseudo;
    for(let i=0,m=rules,l=rl,rule;i<l;){
     const n=(rule=m[i]).type;//nb: 9 is reserved for define color profiles in the future...
     trace.group(i+'\u2002%O',rule);
     if(n===1){//#Style
	  let s,t,x;
      s=rule.selectorText;
      t=s.replace(pseudo.classes,'').replace(pseudo.elements,'').replace(pseudo.all,'');
	  try{t=$d.querySelectorAll(t);}catch(x){trace.warn(x);trace.groupEnd();++i;continue;};
      if(x=t.length){
       trace.group('ElementsMatchingRule:',x);
       for(let i=0,m=t,l=x,n;i<l;){
        n=m[i];//node
        trace.dir(n);
        ++i;
	   };
       trace.groupEnd();
       (x=data[1])[x.length]=rule;
      };
     }else if(n===4){//#Media
     }else if(n===3){//#Import
     }else if(n===7){//#Keyframes
     }else if(n===8){//#Keyframe, 
     }else if(n===5){//#FontFace
     }else if(n===2){//#Charset
     }else if(n===6){//#Page
     }else if(n===15){//#Viewport
     }else if(n===12){//#Supports
     }else if(n===10){//#Namespace
     }else if(n===11){//#CounterStyle
     }else if(n===16){//#RegionStyle
     }else if(n===14){//#FontFeatureValues
     }else if(n===13){//#Document
     }else if(n===0){//#Unknown
	  trace.warn('unknow type%O',e);
     };
     trace.groupEnd();
     ++i;
    };
   };
   trace.groupEnd();    
   ++i;
  };
  trace.groupEnd();
  trace.dir(data);
 };
 return null;
}
//
getCssRulesOf(window);
//===============

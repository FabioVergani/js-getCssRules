// noprotect
function getCssRulesOf(w){
 const $=w,$d=$.document,sheets=$d.styleSheets;
 if(sheets.length){
  let result;
  const regex={
   pseudo:{
    all:/::?[^:,.\s]+/gi,
    classes:/:(?::?(?:after|b(?:efore|ackdrop)|first-l(?:ine|etter)|placeholder|marker|(?:spelling|grammar)-error)|:selection)/gi,
    elements:/:(?:hover|checked|n(?:ot\(.*\)|th-(?:child\(.*\)|last-(?:child\(.*\)|of-type\(.*\))|of-type\(.*\)))|f(?:irst(?:-(?:child|of-type))?|ullscreen|ocus)|v(?:alid|isited)|l(?:a(?:ng\(.*\)|st-(?:child|of-type))|eft|ink)|a(?:ctive|ny)|only-(?:child|of-type)|d(?:efault|(?:i(?:r\(.*\)|sabled)))|e(?:mpty|nabled)|r(?:e(?:quired|ad-(?:only|write))|ight|oot)|in(?:determinate|valid|-range)|o(?:ptional|ut-of-range)|target|scope)/gi
   }
  },
  trace=console;
  trace.clear();
  trace.group('styleSheets');
  for(let i=0,m=sheets,l=m.length,e,used,Call,leadingZero,pad=l?(used=result=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],e=Function.prototype,Call=e.bind.bind(e.call),leadingZero=function(j,i){const n=i;return '0'.repeat(j-String(n).length)+n;},Call(leadingZero,null,String(l).length)):l;i<l;){
   e=m[i];//sheet
   if(e.disabled===false){
    const rules=e.cssRules;
    if(rules.length){
     const pseudo=regex.pseudo;
     trace.group(pad(i)+'\u2002%O',e);
     for(let i=0,m=rules,l=m.length,e,pad=Call(leadingZero,null,String(l).length),s,t,x;i<l;){
      const n=(e=m[i]).type;//nb: 9 is reserved for define color profiles in the future...
      trace.group(pad(i)+'\u2002%O',e);
      if(n===1){//#Style
       s=e.selectorText;
       t=s.replace(pseudo.classes,'');//trace.info('strip pseudo-standard classes:',t);
       t=t.replace(pseudo.elements,'');//trace.info('strip pseudo-standard elements:',t);
       t=t.replace(pseudo.all,'');//trace.info('strip all (also not-standard) pseudo:',t);
	   try{t=$d.querySelectorAll(t);}catch(x){trace.warn(x);++i;continue;};
       if(x=t.length){
	    trace.group('ElementsMatchingRule:',x);
        for(let i=0,m=t,l=x,n;i<l;){
         n=m[i];//node
	     trace.dir(n);
         ++i;
	    };
        trace.groupEnd();
        x=used[1];x[x.length]=e;//rule
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
     trace.groupEnd();    
    };
   };
   ++i;
  };
  trace.groupEnd();
  trace.dir(result);
 };
 return null;
}
//
getCssRulesOf(window);
//----------------------------------------------------------------------------------


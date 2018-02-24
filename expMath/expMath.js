export function exp.add(a,b){return Math.max(a,b)+log10(1+10^(-Math.abs(a-b)));}
export function exp.sub(a,b){return Math.max(a,b)+log10(1-10^(-Math.abs(a-b)));}
export function exp.mult(a,b){return a+b;}
export function exp.div(a,b){return a-b;}
export function exp.exp(a,b){return a*10^b;}
export function exp.root(a,b){return a/10^b;}

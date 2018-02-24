function exp.add(a,b){return Math.max(a,b)+log10(1+10^(-Math.abs(a-b)))}
function exp.sub(a,b){return Math.max(a,b)+log10(1-10^(-Math.abs(a-b)))}
function exp.mult(a,b){return a+b}
function exp.div(a,b){return a-b}
function exp.exp(a,b){return a*10^b}
function exp.root(a,b){return a/10^b}

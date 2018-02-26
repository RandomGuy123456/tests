export default function exp_add(a,b){return Math.max(a,b)+log10(1+10^(-Math.abs(a-b)));}
export default function exp_sub(a,b){return Math.max(a,b)+log10(1-10^(-Math.abs(a-b)));}
export default function exp_mult(a,b){return a+b;}
export default function exp_div(a,b){return a-b;}
export default function exp_pow(a,b){return a*10^b;}
export default function exp_root(a,b){return a/10^b;}

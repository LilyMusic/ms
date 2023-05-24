module.exports=m=>[[u="Years ",31536e6],[u="Months ",2592e6],[u="Days ",864e5],[u="Hours ",36e5],[u="Minutes ",6e4],[u="Seconds",1e3]].reduce((r,[u,t])=>(v=m/t|0,m%=t,v?r+`${v} ${u}`:r),"").trim();

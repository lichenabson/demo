import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'
import Dashboard from '@/components/dashboard'
import Organization from '@/components/organization'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: '/organization',
      name: 'Organization',
      component: Organization
    }
  ]
})

/*var array=[1,2,1,8,79,8],max=null;
for(var i in array){
  if(array.hasOwnProperty(i)){
    max=Math.max(max,array[i])
  }
}

console.log(max);*/

/*var array=[1,2,1,8,79,8],functionArray=[];
for(var i in array){
  if(array.hasOwnProperty(i)){
    functionArray.push(
      function(){
        alert(array[i])
      }
    )
  }
}*/

/*var obj=[
  {
    a:1,b:2,c:3
  },{
    a:1,b:{
      a:1,b:2,c:3
    }
  },
  {
    a:1,b:2,c:3,d:1
  },{
    a:1,b:2,c:3,d:1,g:6
  }
];

obj.sort(function(a,b){
  return  Object.getOwnPropertyNames(a).length-Object.getOwnPropertyNames(b).length
});*/

/*function a(){
  var a=1,b=1,c;
  console.log(a);
  console.log(b);
  return (function (){
    for(var i=0;i<100;i++){
      c=a+b;
      a=b;
      b=c;
      console.log(c);
    }
  }())
}*/


/*
Number.prototype.plus=function(a){
  if(typeof a==="number")return this+a
};

Number.prototype.minus=function(a){
  if(typeof a==="number") return this-a
};
*/

//柯里化函数
/*function add(a){
  var s;
    return function (b){
      return b+a
    }
}*/


function add(x) {
  var result=function(y){
    add(x*y);
  };
  result.valueOf=function(){
    return x
  };
  return result;
}

function mul(x) {
  const result =function(y){
    return mul(x * y)
  };
  result.valueOf =function(){
    return x
  };
  return result;
}




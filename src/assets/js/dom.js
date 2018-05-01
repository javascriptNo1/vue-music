/**
 * Created by Administrator on 2018/4/30.
 */
export function addClass(el,classname){
  if(hasclass(el,classname)){
    return
  }
  let newClass=el.className.split(' ')
  newClass.push(classname)
  el.className=newClass.join(' ')
}

export function hasclass (el,classname) {
  let reg=new RegExp('(^|\\s)'+ classname + '(\\s|$)')
  return reg.test(el,classname)
}

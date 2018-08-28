import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, binding, vnode) {

    let current = 0;
    el.addEventListener('dblclick', function(){
      let incremento = binding.value || 90;
      let animate = binding.modifiers.animate || false;
      let reverse = binding.modifiers.reverse || false;
      let efeito ;
      if(!binding.arg || binding.arg == 'rotate') {

        if(!reverse) {
          current +=incremento;
        } else {
          current -=incremento;
        }

        efeito = `rotate(${current}deg)`;

      } else if (binding.arg == "scale") {
        efeito = `scale(${incremento})`;
      }

      el.style.transform = efeito;

      if(animate) {
        el.style.transition = 'transform 0.5s';
      }
    });
  }

});

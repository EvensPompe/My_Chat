<template>
    <div id="menuChat">
        <input type="checkbox" name="menuCheckbox" id="menuCheckbox">
        <label for="menuCheckbox" @click="changeWidth">
        </label>
    </div>
</template>
<script lang="ts">
import store from '../store';
export default {
  name:'menuChat',
  setup(props: any,{emit}: any){
    const changeWidth = (e: any): void =>{
        if (e.path[1].firstChild.checked) {
            store.dispatch('widthChanging',false);
        }else{
            store.dispatch('widthChanging',true);
        }
    }
    return { changeWidth }
  }  
}
</script>
<style scoped>

#menuCheckbox{
    opacity: 0;
}

@media screen and (min-width: 1281px) {
  #menuChat{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightcoral;
  }

  #menuChat label{
    width: 3em;
    height: 0.5em;
    background: wheat;
    position: absolute;
    cursor: pointer;
  }

  #menuChat label::before, #menuChat label::after{
    content: "";
    width: inherit;
    height: inherit;
    background: wheat;
    position: absolute;
    display: block;
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }

  #menuChat label::before{
      top: 200%;
      left: 0;
      transform-origin: top left;
      transform: rotateX(0deg);
  }

   #menuChat label::after{
      top: -200%;
      left: 0;
      transform-origin: bottom left;
      transform: rotateX(0deg);
  }

  #menuCheckbox:checked ~ label::before{
    transform: rotate(-39.5deg);
  }

  #menuCheckbox:checked ~ label::after{
    transform: rotate(39.5deg);
  }

  #menuCheckbox:checked ~ label{
    background: inherit;
  }

   #menuCheckbox ~ label{
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }

}

@media screen and (min-width: 1025px) and (max-width: 1280px) {
  #menuChat{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightcoral;
  }

  #menuChat label{
    width: 3em;
    height: 0.5em;
    background: wheat;
    position: absolute;
    cursor: pointer;
  }

  #menuChat label::before, #menuChat label::after{
    content: "";
    width: inherit;
    height: inherit;
    background: wheat;
    position: absolute;
    display: block;
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }

  #menuChat label::before{
      top: 200%;
      left: 0;
      transform-origin: top left;
      transform: rotateX(0deg);
  }

   #menuChat label::after{
      top: -200%;
      left: 0;
      transform-origin: bottom left;
      transform: rotateX(0deg);
  }

  #menuCheckbox:checked ~ label::before{
    transform: rotate(-39.5deg);
  }

  #menuCheckbox:checked ~ label::after{
    transform: rotate(39.5deg);
  }

  #menuCheckbox:checked ~ label{
    background: inherit;
  }

   #menuCheckbox ~ label{
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    #menuChat{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightcoral;
  }

  #menuChat label{
    width: 3em;
    height: 0.5em;
    background: wheat;
    position: absolute;
    cursor: pointer;
  }

  #menuChat label::before, #menuChat label::after{
    content: "";
    width: inherit;
    height: inherit;
    background: wheat;
    position: absolute;
    display: block;
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }

  #menuChat label::before{
      top: 200%;
      left: 0;
      transform-origin: top left;
      transform: rotateX(0deg);
  }

   #menuChat label::after{
      top: -200%;
      left: 0;
      transform-origin: bottom left;
      transform: rotateX(0deg);
  }

  #menuCheckbox:checked ~ label::before{
    transform: rotate(-39.5deg);
  }

  #menuCheckbox:checked ~ label::after{
    transform: rotate(39.5deg);
  }

  #menuCheckbox:checked ~ label{
    background: inherit;
  }

   #menuCheckbox ~ label{
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    #menuChat{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightcoral;
  }

  #menuChat label{
    width: 3em;
    height: 0.5em;
    background: wheat;
    position: absolute;
    cursor: pointer;
  }

  #menuChat label::before, #menuChat label::after{
    content: "";
    width: inherit;
    height: inherit;
    background: wheat;
    position: absolute;
    display: block;
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }

  #menuChat label::before{
      top: 200%;
      left: 0;
      transform-origin: top left;
      transform: rotateX(0deg);
  }

   #menuChat label::after{
      top: -200%;
      left: 0;
      transform-origin: bottom left;
      transform: rotateX(0deg);
  }

  #menuCheckbox:checked ~ label::before{
    transform: rotate(-39.5deg);
  }

  #menuCheckbox:checked ~ label::after{
    transform: rotate(39.5deg);
  }

  #menuCheckbox:checked ~ label{
    background: inherit;
  }

   #menuCheckbox ~ label{
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    #menuChat{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightcoral;
  }

  #menuChat label{
    width: 3em;
    height: 0.5em;
    background: wheat;
    position: absolute;
    cursor: pointer;
  }

  #menuChat label::before, #menuChat label::after{
    content: "";
    width: inherit;
    height: inherit;
    background: wheat;
    position: absolute;
    display: block;
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }

  #menuChat label::before{
      top: 200%;
      left: 0;
      transform-origin: top left;
      transform: rotateX(0deg);
  }

   #menuChat label::after{
      top: -200%;
      left: 0;
      transform-origin: bottom left;
      transform: rotateX(0deg);
  }

  #menuCheckbox:checked ~ label::before{
    transform: rotate(-39.5deg);
  }

  #menuCheckbox:checked ~ label::after{
    transform: rotate(39.5deg);
  }

  #menuCheckbox:checked ~ label{
    background: inherit;
  }

   #menuCheckbox ~ label{
    transition: all 0.6s cubic-bezier(.22,-0.43,.71,1.95);
  }
}
</style>
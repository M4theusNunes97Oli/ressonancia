<template>
  <div>
    <q-card class="bg-light-blue-7 fullscreen">
      <q-card-section>
        <div>
          <q-img
          src="/statics/img/scaanCT_black.png"
          class="logoF"
          />
        </div>
        <div class="titleF">
          Registro do Paciente
        </div>
        <div>
          <q-input
            standout="bg-light-blue-10 text-amber-13" v-model="name" 
            label="Nome" class="q-mt-md inputTextF inputAllF"
          />
        </div>
        <div>
          <q-input 
            standout="bg-light-blue-10 text-amber-13" v-model="age" 
            label="Idade" type="number" lazy-rules class="q-mt-md inputAllF"
          />
        </div>
        <div>
          <q-input 
            standout="bg-light-blue-10 text-amber-13" v-model="weight" 
            label="Peso" type="number" class="q-mt-md inputAllF"
          />
        </div>
        <div>
          <q-input 
            standout="bg-light-blue-10 text-amber-13" v-model="height" 
            label="Altura" type="number" class="q-mt-md inputAllF"
          />
        </div>
        <div class="buttonF">
          <q-btn color="amber-13" text-color="black" icon-right="send" label="AVANÇAR" to="cutscreen"/>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      age: '',
      weight: '',
      height: '',
    }
  }
}
</script>

<style>
.logoF {
  width: 15vw;
  margin-left: 38vw;
  margin-top: 0vh;
}

.titleF {
  margin-top: 6vh;
  margin-left: 6vw;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 5vh;
}

.inputTextF {
  margin-top: 4vh; 
}

.buttonF {
  margin-left: 27.5vw;
  margin-top: 10vh;  
}
</style>
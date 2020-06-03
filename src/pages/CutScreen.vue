<template>
  <div>
    <q-card class="bg-light-blue-7 fullscreen">
      <q-card-section>
        <!-- LOGO IMAGE -->
        <div class="row">
          
          <div class="col text-amber-13">
            <div class="q-ml-md cursor-pointer non-selectable">
              <q-icon size="md" name="settings" class="icon-serviceC" @click="marginERROR"/>
                <q-menu auto-close>
                  <q-list dense style="min-width: 100px">
                    <q-item clickable b>
                      <q-item-section>Margem de erro de 5%</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Margem de erro de 10%</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Margem de erro de 15%</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Margem de erro de 20%</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
            </div>
          </div>
          
          <div class="col">
            <q-img
            src="/statics/img/scaanCT_black.png"
            class="logoC"
            />
          </div>
          <div class="col text-amber-13">
            <q-icon size="md" name="info" class="icon-infoC" @click="dialog = true"/>
              <q-dialog v-model="dialog" persistent>
                <q-card>
                  <q-card-section class="row items-center">
                    <span class="q-ml-sm">You are currently not connected to any network.</span>
                  </q-card-section>

                  <q-card-section class="row items-center">
                    <span class="q-ml-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                      been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                      a galley of type and scrambled it to make a type specimen book.
                    </span>
                  </q-card-section>

                  <!-- Notice v-close-popup -->
                  <q-card-actions align="right">
                    <q-btn flat label="Fechar" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
          </div>
        </div>
        <!-- IMAGE CUT -->
        
        <div class="col-4 cropperC">
          <q-img
            src="/statics/img/cranio.jpg"
            :ratio="1"
            class="imgC"
          />
        </div>
        <!-- BUTTON -->
        <div>
          <div class="row">
            <div class="col button1C">
              <q-btn color="amber-13" text-color="black" icon-right="crop" label="CORTAR" to="result"/>
            </div>
            <div class="col button2C">
              <q-btn color="amber-13" text-color="black" icon-right="compare" label="ANALISAR" to="result"/>
            </div>
          </div>
        </div>
      
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      cancelEnabled: false
    }
  }
}
</script>

<style>

.icon-serviceC {
  width: 0vw;
}

.icon-infoC {
  width: 50vw;
}

.logoC {
  width: 15vw;
  margin-left: 8vw;
}

.button1C {
  margin-left: 4vw;
  margin-top: 5vh;  
}

.button2C {
  margin-left: 5vw;
  margin-top: 5vh;  
}

.cropperC {
	height: 110vw;
  background: black;
	margin-top: 3vh;
}
.imgC {
  margin-top: 10%;
}
</style>
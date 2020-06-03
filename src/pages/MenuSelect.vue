<template>
    <div>
        <q-card class="bg-light-blue-7 fullscreen">
            <q-card-section>
                <div class="row">
                    <div class="col">
                        <q-img
                        src="/statics/img/scaanCT_black.png"
                        class="logoM"
                        />
                    </div>
                    <div class="col text-amber-13">
                        <q-icon size="md" name="info" class="icon-infoM" @click="dialog = true"/>
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
                <div class="row">
                    <div class="col left1">
                        <q-btn color="primary btnSize" to="cutscreen">
                            <div class="ellipsis">
                                CRÂNIO
                            </div>
                        </q-btn>
                    </div>
                    <div class="col right1">
                        <q-btn color="primary btnSize" @click="dialog_ERROR = true">
                            <div class="ellipsis">
                                PESCOÇO
                            </div>
                        </q-btn>
                    </div>
                </div>
                <div class="row">
                    <div class="col left">
                        <q-btn color="primary btnSize" @click="dialog_ERROR = true">
                            <div class="ellipsis">
                                TÓRAX
                            </div>
                        </q-btn>
                    </div>
                    <div class="col right">
                        <q-btn color="primary btnSize" @click="dialog_ERROR = true">
                            <div class="ellipsis">
                                ABDÔMEN
                            </div>
                        </q-btn>
                    </div>
                </div>
                <div class="row">
                    <div class="col left">
                        <q-btn color="primary btnSize" @click="dialog_ERROR = true">
                            <div class="ellipsis">
                                MÃO ESQUERDA
                            </div>
                        </q-btn>
                    </div>
                    <div class="col right">
                        <q-btn color="primary btnSize" @click="dialog_ERROR = true">
                            <div class="ellipsis">
                                MÃO DIREITA 
                            </div>
                        </q-btn>
                    </div>
                </div>
                <div class="row">
                    <div class="col left">
                        <q-btn color="primary btnSize" @click="dialog_ERROR = true">
                            <div class="ellipsis">
                                PÉ ESQUESDO
                            </div>
                        </q-btn>
                    </div>
                    <div class="col right">
                        <q-btn color="primary btnSize" @click="dialog_ERROR = true">
                            <div class="ellipsis">
                                PÉ DIREITO
                            </div>
                        </q-btn>
                    </div>
                </div>
                <div class="footer">v.1.2</div>
                <q-dialog v-model="dialog_ERROR" persistent>
                    <q-card>
                    <q-card-section class="row items-center">
                        <div class="textBox">
                            <h6 class="textError">Em Breve</h6>
                        </div>
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn flat label="Fechar" color="primary" v-close-popup/>
                    </q-card-actions>
                    </q-card>
                </q-dialog>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog_ERROR: false,
      cancelEnabled: false
    }
  }
}
</script>

<style>
.icon-infoM {
    width: 50vw;
    margin-left: 15vw;
}

.logoM {
    width: 15vw;
    margin-left: 38vw;
}

.textBox {
    width: 50vw;
}

.textError {
    text-align: center;
    font-size: 10vw;
}

.left1 {
    margin-top: 10vh;
    margin-left: 0vw;
}

.right1 {
    margin-top: 10vh;
    margin-left: 9vw;
}

.left {
    margin-top: 15vw;
    margin-left: 0vw;
}

.right {
    margin-top: 15vw;
    margin-left: 9vw;
}

.btnSize {
    width: 40vw;
}

.footer {
    color: white;
    text-align: center;
    margin-top: 20vh;
}
</style>
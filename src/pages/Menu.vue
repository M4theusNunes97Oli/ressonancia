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
                    <div class="col cardLine1M">
                        <q-card @click="$router.push('/select')">
                            <q-card-section class="bg-primary text-amber-13">
                                <q-icon name="play_arrow" class="icon-start"/>
                                <div class="text-iconM">COMEÇAR TESTE</div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col cardLine2M">
                        <q-card @click="$router.push('/history')">
                            <q-card-section class="bg-primary text-amber-13">
                                <q-icon name="history" class="icon-info"/>
                                <div class="text-iconM">HISTÓRICO</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
                <div class="row">
                    <div class="col cardLine3M">
                        <q-card>
                            <q-card-section class="bg-primary text-amber-13">
                                <q-icon name="add_circle" class="icon-more" @click="dialog_more = true"/>
                                <div class="text-iconM">SOBRE O APP</div>
                                <q-dialog v-model="dialog_more" persistent>
                                    <q-card>
                                        <q-card-section class="row items-center">
                                            <span class="q-ml-sm">You are currently not connected to any network.</span>
                                        </q-card-section>

                                        <q-card-section class="row items-center">
                                            <span class="q-ml-sm">
                                                11111111111111111111111111111111111111111111111111111111111111111111111111
                                                22222222222222222222222222222222222222222222222222222222222222222222222222
                                                33333333333333333333333333333333333333333333333333333333333333333333333333
                                            </span>
                                        </q-card-section>

                                        <q-card-actions align="right">
                                            <q-btn flat label="Fechar" color="primary" v-close-popup />
                                        </q-card-actions>
                                    </q-card>
                                </q-dialog>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col cardLine4M">
                        <q-card @click="$router.push('/evaluate')">
                            <q-card-section class="bg-primary text-amber-13">
                                <q-icon name="timeline" class="icon-evaluate"/>
                                <div class="text-iconM">AVALIE O APP</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
                <div class="footerM">v.1.2</div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog_more: false,
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

.cardLine1M {
    margin-top: 10vh;
    width: 85vw;
}

.cardLine2M {
    margin-top: 10vh;
    width: 85vw;
    margin-left: 4vw;
}

.cardLine3M {
    margin-top: 3vh;
    width: 85vw;
}

.cardLine4M {
    margin-top: 3vh;
    width: 85vw;
    margin-left: 4vw;
}

.icon-start {
    margin: center;
    font-size: 18vh;
    width: 35vw;
}

.text-iconM {
    text-align: center;
    color: white;
}

.icon-info {
    margin: center;
    font-size: 18vh;
    width: 36vw;
}

.icon-more {
    margin: center;
    font-size: 18vh;
    width: 35vw;
}

.icon-evaluate {
    margin: center;
    font-size: 18vh;
    width: 36vw;
}

.footerM {
    color: white;
    text-align: center;
    margin-top: 12vh;
}
</style>
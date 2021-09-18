<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-3">{{ month }}</span>
            <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
        </div>
        <div>
            <button
              v-if="entry.id"
              class="btn btn-danger mx-2"
              @click="onDeleteEntry"
            >
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Qué sucedió hoy?"
            v-model="entry.text">
            </textarea>
    </div>
    <img
        src="https://static1.abc.es/media/play/2020/12/22/mandalorian-kKfB--1200x630@abc.jpg"
        alt="entry-picture"
        class="img-thumbnail"
    >
  </template>
  <Fab
    @on:click="saveEntry"
    icon="fa-save"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import getDayMontYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters( 'journal', [ 'getEntriesById' ] ),
        day() {
            const { day } = getDayMontYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMontYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMontYear( this.entry.date )
            return yearDay
        },
    },
    data() {
        return {
            entry: null
        }
    },
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    },
    methods: {
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
        loadEntry() {

            let entry;

            if ( this.id === 'new' ) {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntriesById( this.id )
                if( !entry ) return this.$router.push({ name: 'no-entry' })
            }

            this.entry = entry
        },
        async saveEntry() {

            if ( this.entry.id ) {
                //Actualizar
                this.updateEntry(this.entry)
            } else {
                const id = await this.createEntry(this.entry)

                this.$router.push({ name: 'entry', params: { id } })
            }
        },
        async onDeleteEntry() {

            await this.deleteEntry( this.entry.id )
        }
    },
    created() {
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>

    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }

    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }

</style>
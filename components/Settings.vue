<template>
  <v-dialog v-model="show" max-width="290" persistent>
    <v-card>

      <v-card-title class="headline">
        {{ $t('dialogs.titles.settings') }}
      </v-card-title>

      <v-card-text>
        <v-container>

          <v-row>
            <v-col cols="12">
              <v-select v-model="settings.language" :items="languages" item-text="title" item-value="code" :label="$t('dialogs.fields.languages')"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-select v-model="settings.theme" :items="themes" item-text="title" item-value="value" :label="$t('dialogs.fields.theme')"></v-select>
            </v-col>
          </v-row>

        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="cancel">
          {{ $t('dialogs.buttons.cancel') }}
        </v-btn>
        <v-btn text color="primary" @click.stop="ok">
          {{ $t('dialogs.buttons.save') }}
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
export default {

  props: {
    show: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      settings: {
        language: this.$i18n.locale,
        theme: this.$vuetify.theme.dark
      }
    }
  },

  computed: {
    languages () {
      const languagesList = [
        { title: `${this.$t('languages.english')} - English`, code: 'en' },
        { title: `${this.$t('languages.hebrew')} - עברית`, code: 'he' }
      ]

      return languagesList.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    },

    themes () {
      return [
        { title: this.$t('themes.dark'), value: true },
        { title: this.$t('themes.light'), value: false }
      ]
    }
  },

  methods: {
    cancel () {
      this.$emit('cancel')
    },

    ok () {
      this.$emit('ok', this.settings)
      this.$i18n.setLocale(this.settings.language)
      this.$vuetify.theme.dark = this.settings.theme
    }
  }

}
</script>

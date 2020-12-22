<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md column" style="min-width: 90%; max-width: 95%">
      <div
        v-for="item in kanji"
        :key="item.kanji"
        class="full-width justify-start content-start column items-start my-row"
      >
        <div class="full-width row justify-start items-center">
          <div @click="showKanjiDialog(item)" class="kanji match-q-indent kanji-header">
            {{ item.kanji }}
          </div>
          <div>
            <q-space />
          </div>
          <div>
            <div>
              {{ item.onyomi }}
            </div>
            <div>
              {{ item.kunyomi }}
            </div>
          </div>
        </div>
        <div class="match-q-indent">
          {{ item.meaning }}
        </div>
        <div class="row match-q-indent">
          <div
            v-for="(compoundWord, index) in item.compound_words"
            :key="index"
          >
            <span v-if="index != 0">, </span>
            <!-- <span>{{compoundWord.kanji}}</span> -->
            <span v-html="compoundWord.hiragana"></span>
          </div>
        </div>
        <div style="width: 100%">
          <q-expansion-item
            dense
            expand-separator
            label="example sentences"
            style="width: 100%"
            header-class="text-secondary"
          >
            <q-card>
              <q-card-section>
                <ul>
                  <li
                    v-for="(exampleSentence, index) in item.example_sentences"
                    :key="index"
                  >
                    <span
                      class="clickable-text"
                      v-if="!exampleSentence.furigana"
                      @click="exampleSentence.furigana = true"
                      >{{ exampleSentence.kanji }}</span
                    >
                    <div
                      class="clickable-text"
                      v-if="exampleSentence.furigana"
                      @click="exampleSentence.furigana = false"
                    >
                      <div v-html="exampleSentence.hiragana"></div>
                      <div>{{ exampleSentence.translation }}</div>
                    </div>
                  </li>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>

      <q-dialog v-model="kanjiDialogShown">
        <q-card class="kanji-full-card">
          <q-card-section>
            <div class="row">
              <div class="text-h2 kanji-header">              
                {{ selectedKanji.kanji }}
              </div>
              <div class="column">
                <div>
                Radical: {{selectedKanji.radical}}
                </div>
                <div>
                Strokes: {{selectedKanji.strokes}}
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator />

          <q-card-section class="q-pt-none">
            {{ selectedKanji.meaning }}
          </q-card-section>
           <q-separator />
          <q-card-section >
<ul>
              <li
                v-for="(compoundWord,
                index) in selectedKanji.compound_words"
                :key="index"
              >
                <div>
                  <div v-html="compoundWord.hiragana"></div>
                  <div>{{ compoundWord.translation }}</div>
                </div>
              </li>
            </ul>
          </q-card-section>
           <q-separator />
          <q-card-section>
            <ul>
              <li
                v-for="(exampleSentence,
                index) in selectedKanji.example_sentences"
                :key="index"
              >
                <div>
                  <div v-html="exampleSentence.hiragana"></div>
                  <div>{{ exampleSentence.translation }}</div>
                </div>
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import a_json from "../assets/data/a_kanji.json";
import i_json from "../assets/data/i_kanji.json";

export default {
  name: "PageIndex",
  data: function() {
    return {
      selectedKanji: {
        kanji: "",
        meaning: "",
        strokes: "",
        radical: "",
        compound_words: [],
        example_sentences: []
      },
      kanjiDialogShown: false
    };
  },
  computed: {
    kanji: function() {
      console.log("kanji section" + this.$route.params.section);
      const currSection = this.$route.params.section;
      if (currSection === "い") {
        return i_json;
      } else {
        return a_json;
      }
    }
  },
  methods: {
    showKanjiDialog: function(selectedKanji) {
      console.log("test");
      this.selectedKanji = selectedKanji;
      this.kanjiDialogShown = true;
    }
  }
};
</script>
<style scoped>
.match-q-indent {
  margin-left: 15px;
}

td {
  border: 1px solid black;
}

.my-row {
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  vertical-align: center;
}
.kanji {
  border: 1px solid rgb(201, 201, 201);
  font-size: 20px;
  padding: 3px 6px;
  margin-right: 15px;
}

.kanji .q-item__label.q-item__label--caption.text-caption {
  /* font-size: 20px; */
  color: rgb(253, 253, 253);
}

.text-orange {
  color: rgb(236, 188, 188);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.clickable-text {
  border-bottom: 1px dotted rgb(131, 161, 161);
  display: inline;
  cursor: pointer;
}

.kanji-full-card {
  font-size: 1.2em;
}

.kanji-header {
  color: #81bd8b
}
</style>

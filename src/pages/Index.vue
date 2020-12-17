<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md column" style="min-width: 90%; max-width: 95%">
      <div
        v-for="item in kanji"
        :key="item.name"
        class="full-width justify-start content-start column items-start my-row"
      >
        <div class="full-width row justify-start items-center">
          <div class="kanji match-q-indent">
            {{ item.name }}
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
                    v-for="(exampleSentence, index) in item.exampleSentences"
                    :key="index"
                  >
                    {{ exampleSentence.kanji }}
                  </li>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: function () {
    return {
      kanji: [
        {
          name: "亜",
          onyomi: "ア",
          kunyomi: "つ.ぐ",
          meaning: "sub-",
          exampleSentences: [
            { kanji: "亜鉛合金の誕生日帽子。" },
            { kanji: "真鍮は銅と亜鉛の合金である。" },
            { kanji: "私は亜紀子さんより佐知子さんの方が好きです。" },
          ],
        },
        {
          name: "哀",
          onyomi: "アイ",
          kunyomi: "あわ.れ、あわ.れむ",
          meaning: "pathetic, grief, pity, sorrow",
          exampleSentences: [
            { kanji: "人々はその孤児を哀れんだ。" },
            { kanji: "彼女は哀れを誘う有様だった。" },
            { kanji: "哀れな吸血鬼。" },
          ],
        },
        {
          name: "挨",
          onyomi: "アイ",
          kunyomi: "ひら.く",
          meaning: "push open",
          exampleSentences: [{ kanji: "挨拶すること。" }],
        },
        {
          name: "愛",
          onyomi: "アイ",
          kunyomi: "",
          meaning: "love",
          exampleSentences: [
            { kanji: "愛している。" },
            { kanji: "彼は最愛の息子をなくした。" },
            { kanji: "遠距離恋愛をしたことありますか。" },
          ],
        },
        {
          name: "曖",
          onyomi: "アイ",
          kunyomi: "",
          meaning: "not clear, vague",
          exampleSentences: [
            { kanji: "彼はまた曖昧な事を言うかもしれない。" },
            { kanji: "この文の意味は曖昧だ。" },
            { kanji: "彼女は私達に曖昧な返事をした。" },
          ],
        },
        {
          name: "悪",
          onyomi: "アク",
          kunyomi: "わる.い、にく.む",
          meaning: "bad",
          exampleSentences: [{ kanji: "彼は悪い人ですよ。" }],
        },
        {
          name: "握",
          onyomi: "アク",
          kunyomi: "にぎ.る",
          meaning: "grip, hold, mould sushi",
          exampleSentences: [
            { kanji: "成功への鍵を握るのは教育である。" },
            { kanji: "若い女性が車のハンドルを握っていた。" },
            { kanji: "弁護士は彼女が潔白だという有力な証拠を握っている。" },
          ],
        },
        {
          name: "圧",
          onyomi: "アツ",
          kunyomi: "お.す、へ.す、おさ.える",
          meaning: "pressure, push, overwhelm, oppress, dominate",
          exampleSentences: [
            { kanji: "専制君主は自民を弾圧した。" },
            { kanji: "私は血圧が低いです。" },
            { kanji: "彼は私に圧力をかけた。" },
          ],
        },
      ],
    };
  },
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
</style>

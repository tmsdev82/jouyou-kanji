<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Common use Kanji　「常用漢字」
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Menu
        </q-item-label>

        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="school"
            label="Kanji list"
            caption="Common kanji"
            default-opened
          >
            <q-card>
              <q-card-section> 
                <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            
            label="あ、い、う、え、お"            
            
          >
            <q-card>
              <q-card-section> 
                  <EssentialLink
                  v-for="kanjiLink in aiueoLinks"
                  :key="kanjiLink.title"
                  v-bind="kanjiLink"
                  />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>

        <!-- <q-item>
          <q-item-section top avatar>
            <q-icon name="school" />
          </q-item-section>

          <q-item-section side top>
            <q-item-label>Kanji list</q-item-label>
            <q-item-label caption>
              Description
            </q-item-label>
          </q-item-section>
          <q-item-section>
          </q-item-section>
        </q-item> -->
        <!-- <div class="q-pa-md q-gutter-sm">
          <q-tree
            :nodes="props"
            default-expand-all
            :selected.sync="selectedSection"
            node-key="label"
            color="primary"
          />
        </div> -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "About",
    caption: "About common use kanji list",
    icon: "info",
    link: "/about"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      aiueoLinks: [
        {
          title: "あ",          
          link: "/kanji-list/あ",
          
        },
        {
          title: "い",          
          link: "/kanji-list/い",
          
        }
      ],
      selectedSection: "あ",
      props: [
        {
          label: "あ、い、う、え、お",
          children: [
            { label: "あ", handler: this.nodeHandler, meta: "あ" },
            { label: "い", handler: this.nodeHandler, meta: "い" }
          ]
        }
      ]
    };
  },
  methods: {
    nodeHandler: function(node) {
      console.log("clicked: " + node.meta);
      this.$router.replace({
        path: "kanji-list",
        query: { kanji_section: node.meta }
      });
    }
  }
};
</script>

<script>
import EditorasApi from "@/api/editoras";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editoras: [],
      editora: {},
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editora = {};
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
  },
};
</script>

<template>
  <h1>Editoras</h1>
  <hr />
  <div class="form">
    <input
      class="inputEnviar"
      type="text"
      v-model="editora.nome"
      placeholder="Nome da editora"
    />
    <input
      class="inputEnviar"
      type="text"
      v-model="editora.site"
      placeholder="Website da editora"
    />
    <button class="btn" @click="salvar">
      <font-awesome-icon icon="fa-solid fa-floppy-disk" /> <span>Salvar</span>
    </button>
  </div>
  <hr />
  <table>
    <tr>
      <th>Id da Editora</th>
      <th>Nome</th>
      <th>Website (Opcional)</th>
      <th>Ação</th>
    </tr>
    <tr v-for="editora in editoras" :key="editora.id">
      <td>{{ editora.id }}</td>
      <td>{{ editora.nome }}</td>
      <td>{{ editora.site }}</td>
      <td>
        <button class="btn-excluir" @click="excluir(editora)">
          <font-awesome-icon icon="fa-trash" /> <span>Excluir</span>
        </button>
        <button class="btn-editar" @click="editar(editora)">
          <font-awesome-icon icon="fa-pencil" /> <span>Editar</span>
        </button>
      </td>
    </tr>
  </table>
</template>

<style></style>

<script>
import CategoriasApi from "@/api/categorias";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categorias: [],
      categoria: {},
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categoria = {};
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
  },
};
</script>

<template>
  <h1>Categoria</h1>
  <hr />
  <div class="form">
    <input
      class="inputEnviar"
      type="text"
      v-model="categoria.descricao"
      placeholder="Descrição"
    />
    <button class="btn" @click="salvar">
      <font-awesome-icon icon="fa-solid fa-floppy-disk" /> <span>Salvar</span>
    </button>
  </div>
  <hr />
  <table>
    <tr>
      <th>Id da Categoria</th>
      <th>Descrição</th>
      <th>Ação</th>
    </tr>
    <tr v-for="categoria in categorias" :key="categoria.id">
      <td>{{ categoria.id }}</td>
      <td>{{ categoria.descricao }}</td>
      <td>
        <button class="btn-excluir" @click="excluir(categoria)">
          <font-awesome-icon icon="fa-trash" /> <span>Excluir</span>
        </button>
        <button class="btn-editar" @click="editar(categoria)">
          <font-awesome-icon icon="fa-pencil" /> <span>Editar</span>
        </button>
      </td>
    </tr>
  </table>
</template>

<style></style>

<script>
import LivrosApi from "@/api/livros";
const livrosApi = new LivrosApi();
import CategoriasApi from "@/api/categorias";
const categoriasApi = new CategoriasApi();
import EditorasApi from "@/api/editoras";
const editorasApi = new EditorasApi();
import AutoresApi from "@/api/autores";
const autoresApi = new AutoresApi();

export default {
  data() {
    return {
      livros: [],
      livro: {},
      categorias: [],
      editoras: [],
      autores: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
    this.editoras = await editorasApi.buscarTodasAsEditoras();
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.livro = {};
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
  },
};
</script>

<template>
  <h1>Livros</h1>
  <hr />
  <div class="form">
    <input
      class="inputEnviar"
      type="text"
      v-model="livro.titulo"
      placeholder="Título do livro"
      required
    />
    <input
      class="inputEnviar"
      type="text"
      v-model="livro.isbn"
      placeholder="ISBN do livro"
      required
    />
    <input
      class="inputEnviar"
      type="number"
      v-model="livro.quantidade"
      placeholder="Quantidade do livro"
      required
    />
    <input
      class="inputEnviar"
      type="number"
      v-model="livro.preco"
      placeholder="Preço do livro"
      required
    />
    <select required v-model="livro.categoria" class="inputEnviar">
      <option disabled selected value="">Categoria</option>
      <option
        v-for="categoria in categorias"
        :key="categoria.id"
        :value="categoria.id"
      >
        {{ categoria.descricao }}
      </option>
    </select>
    <select required v-model="livro.editora" class="inputEnviar">
      <option disabled selected value="">Editora</option>
      <option v-for="editora in editoras" :key="editora.id" :value="editora.id">
        {{ editora.nome }}
      </option>
    </select>
    <select required v-model="livro.autor" class="inputEnviar">
      <option disabled selected value="">Autor</option>
      <option v-for="autor in autores" :key="autor.id" :value="autor.id">
        {{ autor.nome }}
      </option>
    </select>
    <button class="btn" @click="salvar">
      <font-awesome-icon icon="fa-solid fa-floppy-disk" /> <span>Salvar</span>
    </button>
  </div>
  <hr />
  <table>
    <tr>
      <th class="cabeça">Id</th>
      <th class="cabeça">Título</th>
      <th class="cabeça">ISBN</th>
      <th class="cabeça">Quantidade</th>
      <th class="cabeça">Preço</th>
      <th class="cabeça">Categoria</th>
      <th class="cabeça">Editora</th>
      <th class="cabeça">Autor</th>
      <th class="cabeça">Ação</th>
    </tr>
    <tr v-for="livro in livros" :key="livro.id">
      <td>{{ livro.id }}</td>
      <td>{{ livro.titulo }}</td>
      <td>{{ livro.isbn }}</td>
      <td>{{ livro.quantidade }}</td>
      <td>{{ livro.preco }}</td>
      <td>{{ livro.categoria.descricao }}</td>
      <td>{{ livro.editora.nome }}</td>
      <td>{{ livro.autor.nome }}</td>
      <td>
        <button class="btn-excluir" @click="excluir(livro)">
          <font-awesome-icon icon="fa-trash" /> <span>Excluir</span>
        </button>
        <button class="btn-editar" @click="editar(livro)">
          <font-awesome-icon icon="fa-pencil" /> <span>Editar</span>
        </button>
      </td>
    </tr>
  </table>
</template>

<style></style>

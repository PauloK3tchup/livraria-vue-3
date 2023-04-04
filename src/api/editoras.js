import axios from "axios";
export default class EditorasApi {
  async buscarTodasAsEditoras() {
    const { data } = await axios.get("/editoras/");
    return data;
  }
  async adicionarCategoria(editora) {
    const { data } = await axios.post("/editoras/", editora);
    return data;
  }
  async atualizarCategoria(editora) {
    const { data } = await axios.put(`/categorias/${editora.id}/`, editora);
    return data;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`/categorias/${id}/`);
    return data;
  }
}

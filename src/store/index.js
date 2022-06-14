import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import Swal from "sweetalert2";
Vue.use(Vuex);

export default new Vuex.Store({
			state: {
				usuario: undefined,
				cursos: [],
				loading:false,
			},
			mutations: {
				AGREGA_USUARIO(state, usuario) {
					state.usuario = usuario;
				},
				LOGOUT(state) {
					state.usuario = undefined;
				},
				CARGAR_CURSOS(state, cursos) {
					state.cursos = cursos;
				},
			},
			actions: {
				inicioSesion({
					commit
				}, usuario) {
					commit("AGREGA_USUARIO", usuario);
				},
				logOut({
					commit
				}) {
					commit("LOGOUT");
				},
				traerCursos({
					commit
				}) {
					firebase
						.firestore()
						.collection("data")
						.onSnapshot((result) => {
							let cursos = [ ];
							result.forEach((element) => {
								cursos.push({
									Np: element.data().Np,
									Estado: element.data().Estado,
									Producto1: element.data().Producto1,
									Producto2: element.data().Producto2,
									Whatsapp: element.data().Whatsapp,
									Retiro: element.data().Retiro,
									Recibe: element.data().Recibe,
									Telefono: element.data().Telefono,
									Envia: element.data().Envia,
									Direccion: element.data().Direccion,
									Mensaje: element.data().Mensaje,
									Observacion: element.data().Observacion,
									Horariodeentrega: element.data().Horariodeentrega,
									Costoprueba:element.data().Costoprueba,
									Fechadeenvio: element.data().Fechadeenvio,
									Valor2: element.data().Valor2,
									Total: element.data().Total,
									idDoc: element.id,
								});
							});
							commit("CARGAR_CURSOS", cursos);
						});
				},
				borrarCurso(context, curso) {
					/* Delete */
					firebase
						.firestore()
						.collection("data")
						.doc(curso.idDoc) //id del curso
						.delete().then(() => {
							Swal.fire({
								icon: "success",
								title: `El pedido ${curso.Np} se ha eliminado correctamente `,
								
							});
						}).catch(err => {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: `Se ha generado un problema al intentar eliminar el pedido ${curso.Np}:`,
								footer: err,
							});
						})
				},
				actualizarCurso(context, curso) {
					/* Update */
					firebase
						.firestore()
						.collection("data")
						.doc(curso.idDoc)
						.set(curso).then(() => {
							Swal.fire({
								icon: "success",
								title: `El pedido ${curso.Np} se ha actualizado exitosamente.`,
							});

						}).catch(err => {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Se ha generado un problema al intentar actualizar el pedido",
								footer: err,
							});
						})
				},
				async agregarCurso(context, curso) {
					return new Promise((resolve, reject) => {
							/* Create */
							firebase
								.firestore()
								.collection("data")
								.add(curso)
								.then(() => {
									Swal.fire({
										icon: "success",
										title: "Pedido registrado exitosamente",
									});
									resolve()
								})
								.catch(err => {
									alert("Error al agregar el pedido, informe al administrador de la web.")
									console.log(err)
									reject();
								})
						},
					)}
				},
				modules: {},
				getters: {
					usuario(state) {
						return state.usuario;
					}
				},
			});
class ControleAcesso {
    constructor() {
        this.usuarios = new Set(); // Usamos um Set para garantir que não haja usuários duplicados
    }

    adicionarUsuario(usuario) {
        if (this.usuarios.has(usuario)) {
            console.log(`Usuário ${usuario} já tem acesso.`);
        } else {
            this.usuarios.add(usuario);
            console.log(`Usuário ${usuario} adicionado com sucesso.`);
        }
    }

    removerUsuario(usuario) {
        if (this.usuarios.has(usuario)) {
            this.usuarios.delete(usuario);
            console.log(`Usuário ${usuario} removido com sucesso.`);
        } else {
            console.log(`Usuário ${usuario} não encontrado.`);
        }
    }

    verificarAcesso(usuario) {
        if (this.usuarios.has(usuario)) {
            console.log(`Usuário ${usuario} tem acesso.`);
            return true;
        } else {
            console.log(`Usuário ${usuario} não tem acesso.`);
            return false;
        }
    }
}

// Testes
const sistema = new ControleAcesso();

// Testando a adição de usuários
sistema.adicionarUsuario("Alice"); // Usuário Alice adicionado com sucesso.
sistema.adicionarUsuario("Bob");   // Usuário Bob adicionado com sucesso.
sistema.adicionarUsuario("Alice"); // Usuário Alice já tem acesso.

// Testando a verificação de acesso
sistema.verificarAcesso("Alice"); // Usuário Alice tem acesso.
sistema.verificarAcesso("Bob");   // Usuário Bob tem acesso.
sistema.verificarAcesso("Charlie"); // Usuário Charlie não tem acesso.

// Testando a remoção de usuários
sistema.removerUsuario("Bob");     // Usuário Bob removido com sucesso.
sistema.verificarAcesso("Bob");    // Usuário Bob não tem acesso.

// Tentando remover um usuário que não existe
sistema.removerUsuario("Charlie"); // Usuário Charlie não encontrado.


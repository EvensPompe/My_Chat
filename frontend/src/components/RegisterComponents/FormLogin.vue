<template>
        <div id="formLogin">
        <form>
            <section>
                <div>
                    <div>
                        <label for="userName">Nom utilisateur</label>
                    </div>
                    <div>
                        <input type="text" id="userName">
                    </div>
                </div>
                <div>
                    <div>
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <input type="email" id="email">
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <label for="password">Mot de passe</label>
                    </div>
                    <div>
                        <input type="password" id="password" required>
                    </div>
                </div> 
                <div>
                    <button type="submit">Connexion</button>
                </div>
            </section>
        </form>
    </div>
</template>
<script lang="ts">
export default {
    name:"FormLogin"
}
</script>
<style scoped>
#formLogin{
    width: 100%;
    height: 100%;
}

#formLogin form{
    width: inherit;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
}

#formLogin form section{
    width: 50%;
    height: inherit;
}

#formLogin form section:first-child div,
#formLogin form section:last-child div div{
    width: 100%;
    height: 50%;
}

#formLogin form section:first-child div div,
#formLogin form section:last-child div div{
    width: inherit;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: flex-start;
}

#formLogin form section:first-child div div:first-child label,
#formLogin form section:last-child div div:first-child label{
    font-size: 24px;
}

#formLogin form section:first-child div div:last-child input,
#formLogin form section:last-child div div:last-child input{
    width: 90%;
    height: 30px;
    font-size: 30px;
    background: transparent;
    color: white;
    border: none;
    border-bottom: 2px white solid;
    border-left: 2px white solid;
    cursor: text;
    transition: all 0.3s ease-out;
}

#formLogin form section:first-child div div:last-child input:hover,
#formLogin form section:last-child div div:last-child input:hover{
    color: white;
    background: gray;
    border:none;
    border-top:2px white solid;
    border-right:2px white solid;
}

#formLogin form section:last-child div{
    width: 100%;
    height: 50%;    
}

#formLogin form section:last-child div:last-child{
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

#formLogin form section:last-child div:last-child button{
    width: 160px;
    height: 50px;
    font-size: 28px;
    background: black;
    color:white;
    border: white 2px solid;
    border-radius: 4%;
    cursor: pointer;
    transition: all 0.3s ease-out;
}

#formLogin form section:last-child div:last-child button:hover{
    background: gray;
}

#formLogin form section:last-child div:last-child button:active{
    background: white;
    color: black;
}
</style>
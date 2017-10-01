<template>
    <div>{{ name }}
        <crud-view> </crud-view>
    </div>
    
</template>
<script>
    export default {
        props: {
            name: String
        },
        created () {
            console.log(this.name + ': Created');
        },
        destroyed () {
            console.log(this.name + 'Destroyed');
        }
    }
</script>
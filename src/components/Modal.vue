<template>
    <div>
        <Modal
            v-model="modal1"
            title="Common Modal dialog box title"
            @on-ok="ok"
            @on-cancel="cancel">
            <solt name="form"></solt>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: true
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>

Vue.component('common-modal', {
  template: `
    <div class="modal_back" >
      <div class="modal_body">
        <p class="modal_sign">{{ defaulsMessage }}</p>
        <p class="alert_color">{{ message }}</p>
        <button @click="hideModal">close</button>
      </div>
    </div>
  `,
  props: {
    message: String,
  },
  methods: {
    hideModal() {
      this.$emit('close');
    },
  },
  data() {
    return {
      defaulsMessage: '入力エラーがあります。',
    };
  },
})

const app = new Vue({
  el: '#app',
  data: {
    errorMessage: 'Eメールが一致しません',
    formData: {
      name: '',
      region: '',
      email: '',
      emailConfirm: '',
      content: '',
    },
    regions:[
      { id: 1, name: '東北' },
      { id: 2, name: '関東' },
      { id:3, name: '関西'},
    ],
    confirmView: false,
    modalView: false,
  },
  methods: {
    openCheckArea() {
      if (!this.validation) {
        this.showModal();
      }else{
        this.confirmView = true;
      }
    },
    closeCheckArea() {
      this.confirmView = false;
    },
    showModal() {
      this.modalView = true;
    },
    hideModal() {
      this.modalView = false;
    },
  },
  computed: {
    validation: function() { 
      return this.formData.email === '' || this.formData.emailConfirm === '' || this.formData.email === this.formData.emailConfirm
    },
    errorClass: function() {
      return this.validation ? false : 'alert_bg';
    },
  },
})
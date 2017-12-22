<template>
    <div>
      <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="medium">
          <el-form-item label="旧密码" prop="oldPaddword">
            <el-input type="password" v-model="ruleForm.oldPaddword" placeholder="请输入旧密码"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPaddword">
            <el-input type="password" v-model="ruleForm.newPaddword" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="重复新密码" prop="repetPaddword">
            <el-input type="password" v-model="ruleForm.repetPaddword" placeholder="请重复输入新密码"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm('ruleForm')" size="medium">提交</el-button>
          <el-button @click="resetForm('ruleForm')" size="medium">重置</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
  import bus from '../../state'
  export default {
    data() {
      return {
        dialogVisible: false,
        ruleForm: {
          oldPaddword: '',
          newPaddword: '',
          repetPaddword: ''
        },
        rules: {
          oldPaddword: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, message: '密码长度最少6个字符', trigger: 'blur' }
          ],
          newPaddword: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, message: '密码长度最少6个字符', trigger: 'blur' }
          ],
          repetPaddword: [
            { required: true, message: '请重复输入新密码', trigger: 'blur' },
            { min: 6, message: '密码长度最少6个字符', trigger: 'blur' }
          ]
        }
      }
    },
    created(){
      var that = this;
      bus.$on('editShow', function (editShow) {
        that.dialogVisible = editShow;
      })
    },
    mounted(){
      
    },
    methods:{
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

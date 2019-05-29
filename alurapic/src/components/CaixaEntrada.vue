<template>
  <div id="caixa-entrada">
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="address" label="Address">
        </el-table-column>
        <el-table-column label="Operations">
            <template slot-scope="scope">
                <span>Acoes</span>
                <el-button size="mini" @click="exibirAcoes(scope.$index)">Edit</el-button>
                <div id="caixa" v-show="selectId === scope.$index">
                    <p>Ações</p>
                    <p>Editar</p>
                    <p>Deletar</p>
                </div>
            </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>

import Acoes from './Acoes.vue';

  export default {
    name: 'Caixa-Entrada',
    data() {
      return {
         tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            show: false
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            show: false
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            show: false
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            show: false
          }], 
          selectId: Number
        };
    },
    methods: {
      exibirAcoes(index) {
          this.selectId === index  ? this.selectId = undefined : this.selectId = index;
      }
    },
  };

</script>

<style>
    #caixa-entrada {
        height: 800px;
        width: 800px;
    }
    #caixa {
        position: absolute; 
        left: 50%; 
        top: 50%;
        width: 116px;
        height: 118px;
        border-radius: 5px;
        background-color: #FFF;
        color: #FFF;
        background-color: #666;
        text-align: center;
        z-index: 1000;
    }

</style>

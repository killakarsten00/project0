pipeline {
   agent any
    environment{
        JENKINS_NODE_COOKIE=‘dontkillmeplease’
        PORT=5000
    }
   stages {
    //    stage(‘clean’){
    //        steps{
    //             cleanWS()
    //        }
    //    }
    //    stage(‘download’){
    //        steps{
    //            git branch: ‘master’, url: ‘https://gitlab.com/2005-javareact/robert/project-0’, credentialsId: '  80f2785e-7c3d-4107-9207-0e9dfaaf4bad’
    //        }
    //    }
      stage(‘Install node modules’) {
         steps {
            sh ‘npm install’
         }
      }
    //  stage(‘Destroy old App’) {
    //     steps {
    //         script{
    //            try{
    //                sh ‘kill -9 $(lsof -t -i:$PORT)’
    //            }catch (all){
    //              echo ‘No Server was already running’
    //            }
    //         }
    //     }
    //  }
      stage(‘Start App!’) {
         steps {
            sh ‘nohup npm run dev &’
            //sh ‘npm run dev’
         }
      }
   }
}

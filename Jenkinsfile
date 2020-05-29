pipeline {
   agent any
    environment{
        JENKINS_NODE_COOKIE='dontkillmeplease'
        PORT=3000
    }
   stages {
      //   stage('clean'){
      //       steps{
      //            cleanWS()
      //       }
      //   }
      //   stage('download'){
      //       steps{
      //           git branch: 'master', url: 'https://https://gitlab.com/killakarsten00/project0', credentialsId: '070cb400-151a-469d-b673-282f3e2b5bc4'
      //       }
      //   }
      stage('Install node modules') {
         steps {
            sh 'npm install'
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
      stage('Start App!') {
         steps {
            sh 'node index1.js '
            //sh ‘npm run dev’
         }
      }
   }
}

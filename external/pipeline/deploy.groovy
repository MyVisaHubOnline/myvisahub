pipeline {

  agent {
    label 'agent-frontend-node18-18'
  }

  options {
    buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
  }

  stages {

    // stage('Checkout') {
    //     steps {
    //         script {
    //             checkout([$class: 'GitSCM',
    //                 branches: [[name: "master"]],
    //                 userRemoteConfigs: [[url: 'git@bitbucket.org:grupoblidoo/passport-multiproduct-dashboard.git']]
    //             ])
    //         }
    //     }
    // }

        stage('Build') {
            steps {            
                sh "npx next build"
            }
        }

        stage('Deploy') {
            steps {            
                sh "aws s3 cp out/ s3://www.mypassporthub.com/ --recursive"
            }
        }
        stage('Invalidate') {
            steps {            
                sh "aws cloudfront create-invalidation --distribution-id E1ZGXFEYWQEXR3 --paths '/*'"
            }
        }   

    }
}
  



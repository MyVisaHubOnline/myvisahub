resource "aws_cloudfront_distribution" "this" {
  aliases                         = ["mypassporthub.com", "www.mypassporthub.com"]
  comment                         = "Prod mypassporthub.com"
  continuous_deployment_policy_id = null
  default_root_object             = "index.html"
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = false
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags                            = {}
  tags_all                        = {}
  wait_for_deployment             = true
  web_acl_id                      = "arn:aws:wafv2:us-east-1:941024811388:global/webacl/PassportsPublic/3de8c2da-c87c-4265-8b97-7d42a93e9e47"
  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = "acba4595-bd28-49b8-b9fe-13317c0390fa"
    realtime_log_config_arn    = null
    response_headers_policy_id = null
    smooth_streaming           = false
    target_origin_id           = "www.mypassporthub.com.s3.us-east-1.amazonaws.com"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = "www.mypassporthub.com.s3.us-east-1.amazonaws.com"
    origin_access_control_id = "E2NULQPHFW1QPW"
    origin_id                = "www.mypassporthub.com.s3.us-east-1.amazonaws.com"
    origin_path              = null
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:941024811388:certificate/b2db3d54-0c42-4d13-8572-40b34d73a0a1"
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}

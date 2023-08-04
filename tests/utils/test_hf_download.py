from lmetric import download_hf_repo
import os
import shutil

repo_id = 'hf-internal-testing/tiny-random-bert'

def test_hf_download():
    download_dir = './tests/download'
    os.makedirs(download_dir)
    download_hf_repo(repo_id, save_dir=download_dir)
    assert os.path.exists(os.path.join(download_dir, 'tf_model.h5'))
    shutil.rmtree(download_dir)
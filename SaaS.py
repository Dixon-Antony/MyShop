import dropbox
dropbox_access_token= "sl.BJh5Kgnf-U8ifNpKJ9_-T9cWUgz5cJaUw-w4VNWfBRbG7MFt9Ik4I_bnq30pvHe7IHLDXQEsRutOQaHknb4zztews7xasQg1GH20bdZfp09Bb0UbJTB0pU23jpKqNH5Ve0_EhTvLejDM"
dropbox_path= "/helloo.txt"
computer_path=r"D:\cloud_temp\hell.txt"
client = dropbox.Dropbox(dropbox_access_token)
print("[SUCCESS] dropbox account linked")
client.files_upload(open(computer_path, "rb").read(), dropbox_path)
print("[UPLOADED] {}".format(computer_path))

metadata, f = client.files_download('/helloo.txt')
out = open("dowl_download.txt", 'wb')
out.write(f.content)
out.close()
print("[SUCCESS] downloaded")